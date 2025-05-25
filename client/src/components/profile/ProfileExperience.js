import React from 'react';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    {title && (
      <p>
        <strong>Position: </strong> {title}
      </p>
    )}
    {location && (
      <p>
        <strong>Location: </strong> {location}
      </p>
    )}
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

export default ProfileExperience;
