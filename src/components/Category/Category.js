import "./Category.css";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header/Header";

const Category = () => {
    
    return (
        <div className="ctop">
            <div className="head">
                <Navbar />
            </div>
                <Header />
            <div className="cat">
            <div className="cate" id="a">
                <h6>General Knowledge</h6> 
                <h6>Books</h6>
                <h6>Films</h6> 
                <h6 >Sports</h6>
                <h6>Music</h6> 
                <h6>Geography</h6>
                <h6>Musicals and Theaters</h6> 
                <h6>History</h6>
                <h6>Television</h6> 
                <h6>Politics</h6>
                <h6>Video Games</h6> 
            </div>
            <div className="cate" id="b">
                <h6 >Celebrities</h6>
                <h6 >Board Games</h6> 
                <h6 >Animals</h6>
                <h6 >Science and Nature</h6> 
                <h6 >Vehicles</h6>
                <h6>Computer</h6> 
                <h6>Comics</h6>
                <h6>Mathematics</h6> 
                <h6>Gadgets</h6>
                <h6>Mythology</h6> 
                <h6>Cartoon and Animations</h6>
            </div>        
            </div>
        </div>
        
    );
};

export default Category;