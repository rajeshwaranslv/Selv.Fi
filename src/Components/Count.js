import React, { Component } from 'react';
export default class Count extends Component{
    render(){
        return(
            <section id="counts" class="counts">
            <div class="container-fluid" data-aos="fade-up">
              
              <div class="row">
                
                <div class="col-lg-3 col-md-6">
                  <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
                
                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                  <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                    <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""/></div>
                    <p>Projects</p>
                  </div>
                </div>
      
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <i class="bi bi-headset"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
      
                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <i class="bi bi-people"></i>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>      
            </div>
          </section>
 
        )
    }
}