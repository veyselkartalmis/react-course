import React from 'react';
import PropTypes from 'prop-types'; /* Proptypes verebilmek için import etmen gerekir. */

const Card = (props) => {
    return (
        <div className="card w-100">
            <img src={props.image} className="card-img-top" alt={props.cardTitle} />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
            </div>
        </div>
    );
};

/* Eğer olurda bir problemden ötürü propslar çekilemezse default olarak props tanımlayabilirsin */
Card.defaultProps = {
    cardTitle: "Default Card Title",
    cardText: "Default Card Text"
};

/* Gelecek olan propsların türünü belirleyebilir, gerekirse require özelliği verebilirsin. */
Card.propTypes = {
    updatedTime: PropTypes.string,
    image: PropTypes.any.isRequired
}

/* class Card extends React.Component {
    render() {
        return (
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt={this.props.cardTitle} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                </div>
            </div>
        );
    };
}; */

/* Yukarıda yazdığım bir class component örneğidir. Onun üstünde yorum satırında olmayan ise function component örneğidir. Aynı işlevi görür. */
/* Fark olarak class component yazarken props'ların başına this ifadesi gelir. */
/* Eğer işin propslarla ise function component kullanmalısın. Çok fazla state update'i kullanacaksak class component kullanabiliriz.   */


export default Card; /* Başka yerde kullanabilmek için componenti export etmen gerekir. */
