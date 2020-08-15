import React, { Component } from 'react';
import axios from 'axios';

import Joke from './joke'


class GetJokes extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
        // this.getJokes = this.getJokes.bind(this);
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

    //   jokes() {
    //     return this.state.data.map(item => {
    //       return <Joke title={item.name} url={item.url} slug={item.id} />;
    //     });
    //   }


    render() {
        const { data } = this.state
        const dataList = data.length ? (
            data.map(dat => {
                return (
                    <div key={dat.id}>
                        <div>{dat.title}</div>
                        <div>{dat.content}</div>

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