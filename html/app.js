import React, { Component } from 'react';

class App extends Component (){
    render (){
        return(
            <div>
                <header>
                    <h1>React</h1>
                    Hello,React. 
                </header>
                <nav>
                    <ol>
                        <li><a href="1.html">HTML</a></li>
                        <li><a href="2.html">CSS</a></li>
                        <li><a href="3.html">JavaScript</a></li>
                    </ol>
                </nav>
                
                <article>
                    <h2>Wellcom</h2>
                    Hello, React.
                </article>
                
            </div>
        )
    }
}

class Subject extends Component {
    render(){
        return(
            <header>
                
            </header>
        )
    }
}