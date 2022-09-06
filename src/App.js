
function App() {
  const createDigits= () =>{
    const digits=[];
    for(let i =1; i <10; i++){
      digits.push(
        <button ley={i}>{i} </button>
      )
    }
    return digits
  }
  return (
    <div className = "fiApp">
      <div className = "ficalculator">
        <div className = "fidisplay">
          <span>(0)</span> 0
        </div>
        <div className = "fioperators">
          <button> / </button>
          <button> * </button>
          <button> + </button>
          <button> - </button>
          <button> DEL </button>
        </div>
        <div className = "fidigits">
          {createDigits()}
        <button> 0 </button>
        <button> . </button>
        <button> = </button>
        </div>
      </div>
    </div>
  );
}

export default App;
