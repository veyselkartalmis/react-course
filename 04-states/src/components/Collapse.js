import React from 'react';

/* State oluşturmak için class component kullanmak gerekir */
class Collapse extends React.Component {

    constructor() {
        /* extends ettiğim React.Component'in içerisindeki constructor metoduna ait olan tüm özellikleri almamızı sağlar  */
        super();

        /* Stateti oluşturuyorum */
        this.state = {
            showContent: true
        }

        /* Propslar sabittir değiştirilemez fakat stateler ise değiştirilebilir içeriklerdir */
        /* Props ve state kullanımları benzerdir fakat onları ayıran en temel fark budur. */
    }

    render() {
        return (
            <div>
                <p>
                    <a className="btn btn-primary w-100">
                        Link with href
                    </a>
                </p>
                {
                    /* Eğer state true ise cardı göster değilse kapat */
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children} {/* Parent element Collapse olduğu için içerisine eklenen Card verisi children olarak bu şekilde yazılır */}
                            {this.state.showContent}
                        </div>
                    ) : null
                }
            </div>
        );
    }
};

export default Collapse; /* Başka yerde kullanabilmek için componenti export etmen gerekir. */