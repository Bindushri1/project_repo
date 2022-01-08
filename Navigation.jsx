import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div class="container">
         <Link Class="navbar-brand" to="/">
            Health Care
            </Link> 
          <div>
            <ul class="navbar-nav ml-auto">
            <li
                class={` nav-item ${
                    props.location.pathname==="/" ? "active" : ""
                }` }
            >
            <Link class="nav-link" to="/">
                Pimples
                <span class="sr-only"></span>
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Acne" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Acne">
                Acne
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Tan" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Tan">
                    Tan
                </Link>
                </li>


                <li
                class={` nav-item ${
                    props.location.pathname==="/Hairfall" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Hairfall">
                    Hairfall
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Dandruff" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Dandruff">
                    Dandruff
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Itchyscalp" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Itchyscalp">
                    Itchy-Scalp
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Anemia" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Anemia">
                    Anemia
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Malnutrition" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Malnutrition">
                    Malnutrition
                </Link>
                </li>

                <li
                class={` nav-item ${
                    props.location.pathname==="/Obesity" ? "active" : ""
                }` }
            >
                <Link class="nav-link" to="/Obesity">
                    Obesity
                </Link>
                </li>
            
                </ul>
                </div>
                </div>
                </nav>
                </div>
                );
            }

            export default withRouter(Navigation);
