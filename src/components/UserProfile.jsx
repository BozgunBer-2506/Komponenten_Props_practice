function UserProfile({ user }) {
  const { name, role, email, skills, isOnline } = user;
  return (
    <div className="ui-card">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ 
          width: '10px', height: '10px', borderRadius: '50%', 
          backgroundColor: isOnline ? '#10b981' : '#ef4444', marginRight: '10px' 
        }}></div>
        <h3 style={{ margin: 0, color: '#1e293b' }}>{name}</h3>
      </div>
      <p style={{ color: '#334155' }}><strong>Role:</strong> {role}</p>
      <p style={{ color: '#334155' }}><strong>Email:</strong> {email}</p>
      <div style={{ marginTop: '15px' }}>
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;