import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class home extends Component{
    constructor(props){
        super(props);
        this.state={
            dataset:{}
        };

        //this.btnclick= this.btnclick.bind(this);
    }

    btnclick(){
        console.log("clicked");
       
        // Make a request for a user with a given ID
      axios.get('https://api.github.com/users')
      .then(function (response) {
        // handle success
        
        this.setState({
            dataset:response
        })
        console.log(this.state.dataset);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
    

    render(){

        var bookitem;

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fMoAiH8eeb00sHYdki3hqE753vKA9pPG')
        .then(function (response) {
            bookitem=response.data.results.books.map(rank=>{
                //console.log(rank.title);
                return(
                    <p key={rank.rank}>bbb{rank.title}</p>
                )
            })

          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      
        

        return(
            <div>nisith
                
                {bookitem}
                
            </div>
            
            
        )
    }
} 

export default home;