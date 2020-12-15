import React, { Component } from 'react';

import biologo from '../../components/Images/biopicimg.jpg'
import contact from '../../components/Images/contactlogo.png';
import mailme from '../../components/Images/mailmeimg.png';
import pybot from '../../components/Images/pybot.png';
import Opencv from '../../components/Images/Snapshot.png';
import NightMares from '../../components/Images/menu3.png';
import pyimg from '../../components/Images/pythonimg.png'
import jsimg from '../../components/Images/javascriptimg2.png'
import htmlimg from '../../components/Images/html5logo.jpg'
import cssimg from '../../components/Images/csslogo.png'
import wordpressimg from '../../components/Images/wordpress.png'
import mongoimg from '../../components/Images/mngodbimg.png'
import databasebimg from '../../components/Images/database.jpg'
import logo from '../../components/Images/maxresdefault.jpg';

function profilePage() {
  return (
    <div className="body">
      <section className="banner">
        <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
        <h1> Hi! I'm Okay Dexter </h1>
        <p id="paragarph1"> Student </p>
        
      </section> 
      <br />
      <section id="about" className="about">
        <h1>About Me</h1>
        <img src={biologo} width="180" height="180" alt="abtimg"/>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>     
      </section>
      <br />
      <hr />
      <h1 className="skillHeader">My SKills</h1>
      <hr />
      <section id="skillHeader" className="flex-project-container">
        <div><img src={pyimg} width="100" height="100" alt="python"/></div>
        <div><img src={jsimg} width="100" height="100" alt="js"/></div>
        <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
        <div><img src={cssimg} width="100" height="100" alt="css"/></div>
        <div><img src={wordpressimg} width="100" height="100" alt="wordpress"/></div>
        <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
        <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
      </section>
      <hr />
      <section className="projects">
        <h1 id='Portfolio'>Portfolio</h1>
        <p>Here is my example list of projects I "Done".</p>
        <div className="portfolioGallery">
          <img src={pybot} width="200" height="200" alt="Pybot"/><p>Example Project 1</p>
          <img src={Opencv} width="200" height="200" alt="Pybot"/><p>Example Project 2</p>
          <img src={NightMares} width="200" height="200" alt="Pybot"/><p>Example Project 3</p>
        </div>          
      </section>
      <hr />
      <h1 id="contactnav" className="skillHeader">Contact Information</h1>
      <hr />
      <section className="container-1">

        <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
        <h3> <strong>Okay Dexter</strong></h3>
        <h4>Random Text Random text Random text</h4>
        <h4>Email Id: okdexter94@gmail.com</h4>
        <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=okdexter94@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
        <h4>Contant Info: 19200999394/2999839902</h4>
        <a href="https://www.facebook.com/abhishek.shaji1">
        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
        </a>
        <a href="https://twitter.com/techstud101" >
          <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
        </a>
        <a href="https://github.com/abhishek305">
            <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-ezhava-477286146/">
          <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
        </a>
        <a href="https://techstud105blog.wordpress.com/">
          <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
        </a>    
      </section>

    </div>
  );
}

export default profilePage;
