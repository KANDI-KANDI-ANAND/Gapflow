export const categoryAliases: Record<string, string[]> = {
  'Contact Centre': ['Contact Center', 'Contact Centre', 'Comms', 'Communication'],
  'Communication': ['Communication', 'Comms', 'Messaging'],
  'AI': ['AI', 'Artificial Intelligence', 'Machine Learning', 'Language Models'],
  'Sales & CRM': ['CRM', 'Sales', 'Sales & CRM', 'Customer Relationship Management'],
  'Marketing': ['Marketing', 'Advertising', 'Email Marketing'],
  'Customer Support': ['Customer Support', 'Support', 'Help Desk', 'Customer Service'],
  'Data & Analytics': ['Data & Analytics', 'Analytics', 'BI', 'Business Intelligence', 'Data'],
  'IT & DevOps': ['IT & DevOps', 'DevOps', 'IT', 'Development', 'Version Control'],
  'Finance & Accounting': ['Finance & Accounting', 'Finance', 'Accounting', 'Bookkeeping'],
  'Productivity': ['Productivity', 'Project Management', 'Task Management', 'Time Tracking'],
  'Data & Storage': ['Data & Storage', 'Cloud Storage', 'Storage', 'Database', 'Data Warehouses'],
  'E-commerce': ['E-commerce', 'Commerce', 'Online Store', 'Shopping'],
  'Content Management': ['Content Management', 'CMS', 'Website Builder', 'Headless CMS'],
  'Forms & Surveys': ['Forms & Surveys', 'Forms', 'Surveys', 'Data Collection'],
  'Document Management': ['Document Management', 'Documents', 'E-Signature'],
  'Developer Tools': ['Developer Tools', 'Automation', 'Webhooks', 'APIs']
};

export const normalizeCategory = (category: string): string => {
  const lowerCategory = category.toLowerCase();

  for (const [canonical, aliases] of Object.entries(categoryAliases)) {
    if (aliases.some(alias => alias.toLowerCase() === lowerCategory)) {
      return canonical;
    }
  }

  return category;
};

export const getCategoryAliases = (category: string): string[] => {
  const normalized = normalizeCategory(category);
  return categoryAliases[normalized] || [category];
};

export const categoriesMatch = (category1: string, category2: string): boolean => {
  const normalized1 = normalizeCategory(category1);
  const normalized2 = normalizeCategory(category2);
  return normalized1 === normalized2;
};

export const hasCategory = (categories: string[], targetCategory: string): boolean => {
  const targetAliases = getCategoryAliases(targetCategory);
  return categories.some(cat =>
    targetAliases.some(alias =>
      categoriesMatch(cat, alias)
    )
  );
};
