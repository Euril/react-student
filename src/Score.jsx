const Score = (props) => {
  return ( 
    <>
      <p><span className ='bold'>Score:</span> {props.score.score} / <span className ='bold'>Date:</span> {props.score.date}</p>
    </>
   );
}
 
export default Score;