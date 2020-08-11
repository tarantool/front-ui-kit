import React from 'react'

export const MenuIcon = ({ icon, className }) => {
  if (typeof icon === 'string') {

    return null
  }

  return <div className={className}>{icon}</div>
}
