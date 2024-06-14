import React from 'react'
import Brand from '../../../images/icon-brand-recognition.svg'
import Records from '../../../images/icon-detailed-records.svg'
import Custom from '../../../images/icon-fully-customizable.svg'
import './Statistics.css'

export default function Statistics() {
    return (
        <div className='stats'>
            <div className='text'>
                <h1 className='advanced'>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='card-container'>
                <div className='cards brand'>
                    <div className='pics-wrapper'>
                        <img className='pics' alt='graph' src={Brand} width='35' />
                    </div>
                    <h3 className='card-title'>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='cards records'>
                    <div className='pics-wrapper'>
                        <img className='pics' alt='clock' src={Records} width='35' />
                    </div>
                    <h3 className='card-title'>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='line'></div>

                <div className='cards custom'>
                    <div className='pics-wrapper'>
                        <img className='pics' alt='tools' src={Custom} width='35' />
                    </div>
                    <h3 className='card-title'>Fully Customizable</h3>
                    <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}
