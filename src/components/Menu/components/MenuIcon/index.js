import React from 'react'

export const MenuIcon = ({ icon: IconComponent, className }) => {
  // console.log(typeof IconComponent, IconComponent);

  if (typeof IconComponent === 'string') {
    return null
  }

  if (typeof IconComponent === 'function') {
    return <IconComponent className={className} />
  }

  return <div className={className}>{IconComponent}</div>;
}
