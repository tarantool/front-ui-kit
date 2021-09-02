import React from 'react';

export const SideMenuIcon = ({ icon: IconComponent, className }) => {
  if (typeof IconComponent === 'string') {
    return null;
  }

  if (typeof IconComponent === 'function') {
    return <IconComponent className={className} />;
  }

  return <div className={className}>{IconComponent}</div>;
};
