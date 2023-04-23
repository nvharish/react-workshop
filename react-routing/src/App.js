import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
// import BatmanComp from './components/batman';
// import SupermanComp from './components/superman';
// import WonderWomenComp from './components/wonderwomen';
// import NotFoundComp from './components/notfound';
// import AquamanComp from './components/aqaman';
// import WonderWomenCompNestedComp1 from './components/wonder-women-nested1';
// import WonderWomenCompNestedComp2 from './components/wonder-women-nested2';
import React, { Suspense, useState } from 'react';

function App() {
  let [power, managePower] = useState(1);
  let BatmanComp = React.lazy(() => import("./components/batman"));
  let AquamanComp = React.lazy(() => import("./components/aqaman"));
  let SupermanComp = React.lazy(() => import("./components/superman"));
  let WonderWomenComp = React.lazy(() => import("./components/wonderwomen"));
  let NotFoundComp = React.lazy(() => import("./components/notfound"));
  let WonderWomenCompNestedComp1 = React.lazy(() => import("./components/wonder-women-nested1"));
  let WonderWomenCompNestedComp2 = React.lazy(() => import("./components/wonder-women-nested2"));
  return <div>
    <h1>React Router</h1>
    <h2>Power is {power}</h2>
    <input type="range" value={power} onInput={(evt) => managePower(evt.target.value)} />
    <BrowserRouter>
      {/**all routes rely */}

      {/**using Link */}
      {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/batman">Batman</Link></li>
          <li><Link to="/superman">Superman</Link></li>
          <li><Link to="/auqaman">Aquaman</Link></li>
          <li><Link to="/wonderwomen">Wonder Women</Link></li>
      </ul>
      <Routes> 
        <Route path='/' element={<h1>Home component</h1>}/>
        <Route path='/batman' element={<BatmanComp/>}/>
        <Route path='/superman' element={<SupermanComp/>}/>
        <Route path='/aquaman' element={<AquamanComp/>}/>
        <Route path='/wonderwomen' element={<WonderWomenComp/>}/>
        <Route path='*' element={<NotFoundComp/>}/>
      </Routes> */}

      {/**using NavLink used to get active link */}
      {/* <ul>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/">Home</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/batman">Batman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to={'/superman'}>Superman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/aquaman">Aquaman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen">Wonder Women</NavLink>
          <ul>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie1">Movie 1</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie2">Movie 2</NavLink> </li>
          </ul>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1>Home component</h1>} />
        <Route path='/batman' element={<BatmanComp />} />
        <Route path='/superman' element={<SupermanComp />} />
        <Route path='/aquaman' element={<AquamanComp />} />
        <Route path="/wonderwomen" element={<WonderWomenComp />}>
          <Route path="movie1" element={<WonderWomenCompNestedComp1 />} />
          <Route path="movie2" element={<WonderWomenCompNestedComp2 />} />
        </Route>
        <Route path='*' element={<NotFoundComp />} />
      </Routes> */}

      {/**routes with params */}
      {/* <ul>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/">Home</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/batman">Batman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to={'/superman/' + power}>Superman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/aquaman">Aquaman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen">Wonder Women</NavLink>
          <ul>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie1">Movie 1</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie2">Movie 2</NavLink> </li>
          </ul>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<h1>Home component</h1>} />
        <Route path='/batman' element={<BatmanComp />} />
        <Route path='/superman/:arg1' element={<SupermanComp />} />
        <Route path='/aquaman' element={<AquamanComp />} />
        <Route path="/wonderwomen" element={<WonderWomenComp />}>
          <Route path="movie1" element={<WonderWomenCompNestedComp1 />} />
          <Route path="movie2" element={<WonderWomenCompNestedComp2 />} />
        </Route>
        <Route path='*' element={<NotFoundComp />} />
      </Routes> */}

      {/**Lazy loading routes */}
      <ul>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/">Home</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/batman">Batman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to={'/superman/' + power}>Superman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/aquaman">Aquaman</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen">Wonder Women</NavLink>
          <ul>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie1">Movie 1</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/wonderwomen/movie2">Movie 2</NavLink> </li>
          </ul>
        </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/flash">Flash</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'boxer' : ''} to="/cyborg">Cyborg</NavLink> </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home component</h1>} />
        <Route path="/batman" element={<Suspense fallback={<> ... loading </>}> <BatmanComp />  </Suspense>} />
        <Route path="/superman/:arg1" element={<Suspense fallback={<> ... loading </>}> <SupermanComp />  </Suspense>} />
        <Route path="/aquaman" element={<Suspense fallback={<> ... loading </>}> <AquamanComp />  </Suspense>} />
        <Route path="/wonderwomen" element={<Suspense fallback={<> ... loading </>}> <WonderWomenComp />  </Suspense>}>
          <Route path="movie1" element={<Suspense fallback={<> ... loading </>}> <WonderWomenCompNestedComp1 />  </Suspense>} />
          <Route path="movie2" element={<Suspense fallback={<> ... loading </>}> <WonderWomenCompNestedComp2 />  </Suspense>} />
        </Route>
        <Route path="*" element={<Suspense fallback={<> ... loading </>}> <NotFoundComp />  </Suspense>} />
      </Routes>

    </BrowserRouter>
  </div>
}

export default App;