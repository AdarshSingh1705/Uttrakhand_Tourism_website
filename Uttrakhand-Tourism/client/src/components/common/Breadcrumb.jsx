import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const formatName = (name) => name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, i) => {
        const path = `/${pathnames.slice(0, i + 1).join('/')}`;
        const isLast = i === pathnames.length - 1;
        return (
          <span key={path}>
            <span className="separator"> / </span>
            {isLast ? <span className="current">{formatName(name)}</span> : <Link to={path}>{formatName(name)}</Link>}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
