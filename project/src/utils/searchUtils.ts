export function searchInObject(obj: any, searchQuery: string): boolean {
  const searchLower = searchQuery.toLowerCase();

  function searchValue(value: any): boolean {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(searchLower);
    }
    if (Array.isArray(value)) {
      return value.some(item => searchValue(item));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).some(v => searchValue(v));
    }
    return false;
  }

  return searchValue(obj);
}

export function searchTemplate(template: any, searchQuery: string): boolean {
  if (searchQuery === '') return true;

  const searchLower = searchQuery.toLowerCase();

  const searchableFields = [
    template.title,
    template.description,
    template.longDescription,
    ...(template.tags || []),
    ...(template.integrations || []),
    ...(template.categories || []),
    ...(template.benefits || []),
    ...(template.useCaseBlocks || []),
    ...(template.howToSteps?.map((step: any) => `${step.title} ${step.description}`) || [])
  ];

  return searchableFields.some(field =>
    field && typeof field === 'string' && field.toLowerCase().includes(searchLower)
  );
}

export async function loadIntegrationData(integrationId: string): Promise<any> {
  try {
    const data = await import(`../data/integration-${integrationId}.json`);
    return data.default || data;
  } catch (error) {
    return null;
  }
}

export function searchIntegrationData(integration: any, searchQuery: string): boolean {
  if (searchQuery === '') return true;

  const searchLower = searchQuery.toLowerCase();

  if (integration.name?.toLowerCase().includes(searchLower)) return true;
  if (integration.categories?.some((cat: string) => cat.toLowerCase().includes(searchLower))) return true;
  if (integration.hero?.heading?.toLowerCase().includes(searchLower)) return true;
  if (integration.hero?.subheading?.toLowerCase().includes(searchLower)) return true;

  if (integration.useCases?.some((useCase: any) =>
    useCase.title?.toLowerCase().includes(searchLower) ||
    useCase.blocks?.some((block: string) => block.toLowerCase().includes(searchLower))
  )) return true;

  if (integration.documentation?.some((doc: any) =>
    doc.title?.toLowerCase().includes(searchLower) ||
    doc.description?.toLowerCase().includes(searchLower)
  )) return true;

  if (integration.tutorials?.some((tutorial: any) =>
    tutorial.title?.toLowerCase().includes(searchLower) ||
    tutorial.description?.toLowerCase().includes(searchLower)
  )) return true;

  if (integration.faqs?.some((faq: any) =>
    faq.question?.toLowerCase().includes(searchLower) ||
    faq.answer?.toLowerCase().includes(searchLower)
  )) return true;

  if (integration.testimonials?.some((testimonial: any) =>
    testimonial.quote?.toLowerCase().includes(searchLower) ||
    testimonial.author?.toLowerCase().includes(searchLower) ||
    testimonial.company?.toLowerCase().includes(searchLower)
  )) return true;

  if (integration.limits?.some((limit: any) =>
    limit.title?.toLowerCase().includes(searchLower) ||
    limit.description?.toLowerCase().includes(searchLower)
  )) return true;

  if (integration.relatedQuestions?.some((question: string) =>
    question.toLowerCase().includes(searchLower)
  )) return true;

  return false;
}
