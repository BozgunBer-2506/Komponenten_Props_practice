import Badge from './Badge';

function ContactCard({ contact }) {
  const { name, email, department, status } = contact;
  return (
    <div className="ui-card" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="avatar-circle">{name.charAt(0)}</div>
      <div>
        <h3 style={{ margin: 0, color: '#1e293b' }}>{name}</h3>
        <p style={{ margin: '5px 0', color: '#64748b' }}>{email}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Badge text={department} color="blue" />
          <Badge text={status} color="green" />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;