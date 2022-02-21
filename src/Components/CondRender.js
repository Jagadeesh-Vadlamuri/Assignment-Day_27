import React, { Component } from "react";

export default class CondRender extends Component {
  constructor() {
    super();
    this.state = {
      count: 199,
    };
  }
  render() {
    return (
      this.state.count == 199 && (
        <div>
          <button>Click {this.state.count}</button>
        </div>
      )
    );

    // //Ternery Opearations
    // return this.state.count == 9 ? (
    //   <div>
    //     <button>Click {this.state.count}</button>
    //   </div>
    // ) : (
    //   <div>
    //     <button>Click {this.state.count + 5}</button>
    //   </div>
    // );

    // //if-else conditions
    // if (this.state.count == 9) {
    //   return (
    //     <div>
    //       <button>Click {this.state.count}</button>
    //     </div>
    //   )
    // }
    // else{
    //     return (
    //         <div>
    //           <button>Click {this.state.count +5}</button>
    //         </div>
    //     )
    // }
  }
}
