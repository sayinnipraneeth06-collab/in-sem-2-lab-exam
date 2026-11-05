import { useState } from 'react'

function Avatar({ image, name }) {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="avatar">
      <div className="avatar-image-wrap">
        {imageFailed ? (
          <span className="avatar-fallback" aria-label={`${name} initials`}>
            {initials}
          </span>
        ) : (
          <img
            className="avatar-image"
            src={image}
            alt={`${name}'s profile`}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <h2 className="avatar-name">{name}</h2>
    </div>
  )
}

export default Avatar