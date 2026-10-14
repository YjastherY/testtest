export default function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="student-header">
        <h2 className="student-name">{student.firstName} {student.lastName}</h2>
        <span className={`status-badge ${student.isActive ? 'active' : 'inactive'}`}>
          {student.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className="student-info">
        <div className="info-row">
          <span className="label">ID:</span>
          <span className="value">#{student.id}</span>
        </div>
        <div className="info-row">
          <span className="label">Age:</span>
          <span className="value">{student.age} years</span>
        </div>
        <div className="info-row">
          <span className="label">Group:</span>
          <span className="value group-badge">{student.group}</span>
        </div>
        <div className="info-row">
          <span className="label">Gender:</span>
          <span className="value">
            <span className={`gender-icon ${student.gender}`}>
              {student.gender === 'female' ? '♀' : '♂'}
            </span>
            {student.gender}
          </span>
        </div>
        <div className="info-row">
          <span className="label">Grade:</span>
          <span className="value grade-value">{student.grade}/5.0</span>
        </div>
        <div className="info-row email-row">
          <span className="label">Email:</span>
          <a href={`mailto:${student.email}`} className="value email-link">
            {student.email}
          </a>
        </div>
      </div>
    </div>
  );
}
