# React-Redux-Fundamentals
### Prerequisite to learn the Redux in React
- [x] JavaScript with all basic and advaced DOM concepts
- [x] Export-Import methods in JavaScript
- [x] Familiar with react (for react-redux)

### 1.0.1 Why do we use context API in REACT?
<details>
  <summary><strong>1.0.1.0 Solves Propos Drilling</strong></summary>
  <p>We use context API to get rid of <strong>props drilling</strong> , if we dont' use context API, every time we have to pass the props whenever required and often sometimes it leads passing props to those webPages where it is not required even, so to sort such problems we use context API. </p>
</details>

<details>
   <summary><strong>1.0.1.1 Provide Global Context</strong></summary>
  <p>Context API has a provider function which provides everything as a global context and any webPages where we do need it we can consume it using consumer method of context API, so it solves the problem of props drilling.
    </p>
<h4> NOTE: Flow of props in context API is  top-to-bottom (i.e.from root to child nodes vice-versa is not true)</h4>
</details>

<h2> 1.0.1 REDUX </h2>
 <ul><li>Redux uses context API internally, it uses something called flux architecture.</li>
 <li>1.0.1.0 Flux
   <ul>
    <li>Flux is a mental model for unidirectional flow of data, which we use to reduce the complexity of codebase of our applications/softwares. </li>
<li> Which makes it extremely easy to understand and interpret and update the codebase whenever desired.</li>
     <li>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif" alt="img" height="200px" width="200px" />
     </li>
</ul>
</li>
</ul>
