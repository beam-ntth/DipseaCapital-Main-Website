import React from 'react'
/** 
 * Individual bullet point for the highlights page
*/

const List = ( props ) => {
    return (
        <React.Fragment>
            <div className='list'>
                <h4 data-aos='fade-up' data-aos-delay={ 200 }>{ props.content.head }</h4>
                <p className='about-1' data-aos='fade-up' data-aos-delay={ 300 }>{ props.content.detail }</p>
            </div>
            <style jsx>
                {
                    `
                    .list h4 {
                        font-size: calc(100vw * 2 / 131 + 5px);
                        font-family: 'Prata', serif;
                        margin: 1rem 0;
                    }

                    .about-1 {
                        font-size: calc(100vw * 19 / 1310 + 0px);
                        line-height: calc(100vw * 8 / 262 + 0px);
                        font-weight: 300;
                        text-align: justify;
                    }

                    @media (max-width: 541px) {
                        .list h4 {
                            font-size: 14px;
                            margin: 0.2rem 0;
                        }

                        .about-1 {
                            font-size: 10px;
                            line-height: 14px;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default List;
