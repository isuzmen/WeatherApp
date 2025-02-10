
const Form = () => {

  return (
    <div>
        <h1>Weather App</h1>
        <form>
            <div className="form">
                <input className="inputText" type="text" placeholder="Bir şehir yazınız" />
            </div>
            <div className="btnDiv">
                <button className="btn" type="submit">Verileri getir</button>
            </div>
        </form>
    </div>
  )
}

export default Form
