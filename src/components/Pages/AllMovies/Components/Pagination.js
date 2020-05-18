import React, {Component} from "react";
import "./Pagination.css";
import Pagination from 'react-bootstrap/Pagination'

// function pagination = (props) => {
//     const pageLinks = []

//     for(let i = 1; i <= props.pages + 1; i++) {

//         let active = props.currentPage == i ? 'active' : '';

//     pageLinks.push(<li className={`waves-effect ${active}`} key={i} 
//     onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
//     }


class Paginations extends Component {
    
    render() { 
        const {pagination, currentPage, nextPage, movieData, prevPage,numberOfPages, selfPage,emptySearch} = this.props;
        console.log(currentPage)
                let CurrentnumberOfPages= numberOfPages;
                let active = currentPage;
                let items = [];
                for (let number = 1; number <= CurrentnumberOfPages; number++) {
                   
                items.push(
                    <Pagination.Item key={number} active={number === active}  onClick={() =>{
                        selfPage(number)
                    }}>
                    {number}
                    </Pagination.Item>,
                );
                }

                const paginationBasic = (
                
                    <Pagination>
                    <Pagination.Prev onClick={prevPage}/>
                    <Pagination>{items}</Pagination>
                    <Pagination.Next onClick={nextPage}/>
                    </Pagination>
                );

        return ( 
            <div className="Pagination-container">{paginationBasic}</div>
         );
    }
}
 
export default Paginations;