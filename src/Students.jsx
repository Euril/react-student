import Score from './Score'

const Students = (props) => {
  return ( 
      <>
      <div className="col-md-6">
        <div className="card">  
          <div className="card-header">
            <h5 className="card-title bold" >Name: {props.student.name}</h5>
          </div>
        <div className="card-body">
          <p className="card-text"><span className ='bold'>Bio:</span> {props.student.bio}</p>
          {props.student.scores.map(score => 
            <Score key={score} score={score}
            />
          )}
        </div>
        </div>
      </div>

      </>
   );
}
 
export default Students;