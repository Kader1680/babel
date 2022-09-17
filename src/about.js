import './about.css';
import React from "react";
// import office from '../src/img/office.jpg';


export default class About extends React.Component {

    Product = {
        Name : "Meta", 
        Country : "Silicon Valley"
    }
    render (){
        return(
            <h1>Hellow from {this.Product.Name} in {this.Product.Country} </h1>
            
            // <div>
            //     <div class="alert alert-danger" role="alert">
            //  <div class="card" style="width: 18rem;">
            //         <img src="../img/a.png" class="card-img-top" alt=""/>
            //         <div class="card-body">
            //             <h5 class="card-title">Card title</h5>
            //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //             <a href="#" class="btn btn-primary">Go somewhere</a>
            //         </div>
            //     </div>       Oops Please check your information and reload 
            //     </div>
                
            // </div>
            
        )
    }
}



// function About() {

//     // state = {
//     //     Name : "Google",
//     // }
    
//     return(
//     //     <div class="about">

//     //         <h1>{this.state.Name}</h1>
//     //         <h2>Our Backgound</h2>
//     //         <div class='section'>
                
//     //             <img src={office} alt="" />
//     //             <div class="description" >
//     //                 <h3>Who we are What we do?</h3>
//     //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//     //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>

//     //                 <hr/>

//     //             </div>
//     //         </div>
//     //     </div>
        
        
//     // )
//     <h1>pppppppppppppppp</h1>)
// }

// export default About;




