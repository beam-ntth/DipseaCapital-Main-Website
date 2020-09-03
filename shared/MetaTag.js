import React from 'react';

const MetaTag = () => {
    return (
        <React.Fragment>
            <meta property="og:title" content="Dipsea Capital, LLC | We believe in providing consistent returns throughout the markets' ups and downs" />
            <meta property="og:type" content="website" />
            <meta property='og:url' content='https://www.dipseacapital.com/' />
            <meta property='og:image' content='https://www.dipseacapital.com/DipseaLogo.png' />
            <meta property='og:image:width' content="300" />
            <meta property='og:image:height' content="300" />
            <meta
                property="og:description"
                content="Dipsea Capital was established to provide its clients consistent, uncorrelated returns to major asset classes in all market environments."
            />
            <meta name="author" content="Natheethorn 'Beam' Teacharuangchit" />
        </React.Fragment>
    );
};

export default MetaTag;
