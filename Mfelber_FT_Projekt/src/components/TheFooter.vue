<template>
    <footer id="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Kontakt</h4>
          <p>Email: marcel.felber@student.ukf.sk</p>
          <p>Telefón: +421 456 789 798</p>
        </div>
        <div class="footer-section">
          <h4>Odkazy</h4>
          <router-link to="/">Domov</router-link>
          <router-link to="/about">O nás</router-link>          
        </div>
        <div class="footer-section">
          <h4>Sociálne siete</h4>
          <a href="https://www.facebook.com/UKFvNitre/?locale=sk_SK" target="_blank" >Facebook</a>
          <a href="https://www.facebook.com/UKFvNitre/?locale=sk_SK" target="_blank" >Twitter</a>          
        </div>
      </div>
    </footer>
  </template>
  
  <style>
    #footer {
      background: lightblue;
      color: white;
      padding: 20px;
    }
  
    .footer-container {
      display: flex;
      justify-content: space-around;
    }
  
    .footer-section {
      text-align: left;
    }
  
    #footer h4 {
      margin-bottom: 10px;
    }
  
    #footer a {
      display: block;
      color: white;
      opacity: 0.7;
      transition: 0.2s ease color;
      margin-bottom: 5px;
    }
  
    #footer a:hover {
      opacity: 1;
      color: blue;
    }
  </style>
  