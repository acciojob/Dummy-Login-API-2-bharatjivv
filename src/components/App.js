
function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" id="input-email"/>
        <input type="password" id="input-password"/>
        <button type="submit" id="submit-form-btn">Submit</button>
      </form>


      <p id="user-error"></p>
      <p id="password-error"></p>
    </>
  )
}

export default App;;
