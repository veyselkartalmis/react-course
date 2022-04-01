import React from 'react';

/* State oluşturmak için class component kullanmak gerekir */
class Collapse extends React.Component {

    constructor() {
        super(); /* extends ettiğim React.Component'in içerisindeki constructor metoduna ait olan tüm özellikleri almamızı sağlar  */

        /* Stateti oluşturuyorum */
        this.state = {
            showContent: true
        }

        /* Propslar sabittir değiştirilemez fakat stateler ise değiştirilebilir içeriklerdir */
        /* Props ve state kullanımları benzerdir fakat onları ayıran en temel fark budur. */
    }

    /*
    state = {showContent: false}}  --> State bu şekilde daha kısa bir yazımla da tanımlanabilir 
     */

    showMore = () => {
        /* Statei bulunduğu durumun tersine çevirir */
        /* setState metodu render() metodunun tekrar çalışması için tetikleyicidir */
        this.setState({showContent: !this.state.showContent});
    }

    /* Lifecyle Metotlar */

    /* componentDidMount() metodu component'in render metodundan sonra çalışır */
    componentDidMount(){
        console.log("Component oluşturuldu");
    }

    /* componentDidUpdate() metodu component güncellendikçe çalışan metottur */
    componentDidUpdate(){
        console.log("Component güncellendi");
    }

    render() {
        return (
            <div>
                <p>
                    <button className="btn btn-primary w-100" onClick={this.showMore}>
                        {/* Chilren propslara bu şekilde ulaşabilirsin */}
                        {React.Children.map(this.props.children, children => children.props.cardTitle)}
                    </button>
                </p>
                {
                    /* Eğer state true ise cardı göster değilse kapat */
                    this.state.showContent ? (
                        <div className="collapse show">
                            {/* {this.props.children} Parent element Collapse olduğu için içerisine eklenen Card verisi children olarak bu şekilde yazılır */}

                            {/* İki şekilde de propslar çekilebilir üstte ve altta olduğu gibi fakat aşağıda bulunan yazım daha makul. */}
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }
            </div>
        );
    }
};

export default Collapse; /* Başka yerde kullanabilmek için componenti export etmen gerekir. */