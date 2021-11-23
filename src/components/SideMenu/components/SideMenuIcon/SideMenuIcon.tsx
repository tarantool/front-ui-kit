import React, { ComponentType } from 'react';

export interface SideMenuIconProps {
  className?: string;
  icon: string | ComponentType<{ className?: string }> | unknown;
}

export const SideMenuIcon = ({ icon: IconComponent, className }) => {
  if (typeof IconComponent === 'string') {
    return null;
  }

  if (typeof IconComponent === 'function') {
    return <IconComponent className={className} />;
  }

  return <div className={className}>{IconComponent}</div>;
};
