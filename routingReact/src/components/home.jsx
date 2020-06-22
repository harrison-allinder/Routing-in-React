import React, { Component, Fragment } from 'react';
import "isomorphic-fetch";
import "es6-promise";

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div className="mt-5">
                    <h1>About Studio Ghibli</h1>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="text-center w-75">Studio Ghibli, Inc. is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced several short films, television commercials, and one television film. It was founded on 15 June 1985, after the success of Nausicaä of the Valley of the Wind (1984), with funding by Tokuma Shoten.
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;