import React, { Component } from 'react';
import axios from 'axios';

class GetJokes extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
      }

      componentDidMount() {
        axios
        .get("https://dts-jokester-api.herokuapp.com/jokes")
        .then(response => {
          console.log("response data", response);
          this.setState({
              data: response.data
          })
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
        
        const { data } = this.state
        const dataList = data.length ? (
            data.map(joke => {
                return (
                    <div key={joke.title}>
                        <div>{joke.title}</div>
                        <div>{joke.content}</div>

                    </div>
                )

            })
        ) : (
            <div className="center">No Jokes Yet</div>
        )
        
        return (
            <div className='jokes'>
                {dataList}
            </div>
        );
    }
}

export default GetJokes;