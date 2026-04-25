const integrationModules = import.meta.glob('../data/integration-*.json');

interface IntegrationModule {
  default?: any;
  [key: string]: any;
}

export interface EnrichedConnector {
  id: string;
  title: string;
  tags: string[];
  allCategories: string[];
  slug: string;
  route: string;
  logo?: string;
  initialIndex?: number;
  fullData?: any;
}

export async function loadAllIntegrations(): Promise<Record<string, any>> {
  const integrations: Record<string, any> = {};

  for (const path in integrationModules) {
    const module = await integrationModules[path]() as IntegrationModule;
    const data = module.default || module;
    const id = path.replace('../data/integration-', '').replace('.json', '');
    integrations[id] = data;
  }

  return integrations;
}

export function enrichConnectorWithData(connector: any, allIntegrations: Record<string, any>): EnrichedConnector {
  const slug = connector.title.toLowerCase().replace(/\s+/g, '-');
  const fullData = allIntegrations[slug];

  const catalogTags = connector.tags || [];
  const detailCategories = fullData?.categories || [];

  const allCategoriesSet = new Set([...catalogTags, ...detailCategories]);
  const allCategories = Array.from(allCategoriesSet);

  return {
    id: slug,
    title: connector.title,
    tags: catalogTags,
    allCategories,
    slug,
    route: connector.actions?.[0]?.action || `/integrations/${slug}`,
    logo: connector.logo,
    fullData
  };
}

export function searchEnrichedConnector(connector: EnrichedConnector, searchQuery: string): boolean {
  if (searchQuery === '') return true;

  const searchLower = searchQuery.toLowerCase();

  return (
    connector.title.toLowerCase().includes(searchLower) ||
    connector.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
    connector.allCategories.some(cat => cat.toLowerCase().includes(searchLower))
  );
}
