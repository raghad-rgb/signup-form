import './App.css'

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1 p-5">
      <form method="get" className="border rounded-4 w-50 p-4">
        <h2 className="text-center mb-3">Sign Up</h2>
        <div className="form-group mb-2">
          <label htmlFor="name">Enter your Name</label>
          <input name="name" type="text" id="name" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email">Enter your Email</label>
          <input name="email" type="email" id="email" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password">Enter your Password</label>
          <input name="password" type="password" id="password" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label className="mb-2">Select your Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success text-uppercase mt-3 px-3 fs-5">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default App
