import React, {Component} from "react";
import "./Pagination.css";

// function pagination = (props) => {
//     const pageLinks = []

//     for(let i = 1; i <= props.pages + 1; i++) {

//         let active = props.currentPage == i ? 'active' : '';

//     pageLinks.push(<li className={`waves-effect ${active}`} key={i} 
//     onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
//     }


class Pagination extends Component {



    
    render() { 
        const {pagination, currentPage, nextPage, movieData} = this.props;
        
        return ( 
<div className = "pagination_container">
        <div className = "row">
            <ul className = "pagination">
                { currentPage > 1 ? <li className={`waves-effect`} 
                onClick={() => nextPage(currentPage - 1)}><a href={pagination.links.prev}>Prev</a></li> : ''}
            
                {movieData.map((pageNumber, index) => (
                    <button> {pageNumber.numberOfPages}</button>

                )) }

                <button onClick={nextPage}>next</button>

                { currentPage < pagination.pages + 1 ? <li className={`waves-effect`} 
                onClick={() => nextPage(currentPage + 1)}><a href={pagination.links.next}>Next</a></li> : ''}
                </ul>

        </div>
    </div>

         );
    }
}
 
export default Pagination;