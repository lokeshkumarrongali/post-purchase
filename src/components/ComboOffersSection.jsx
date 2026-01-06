import React, { useState } from 'react';

const ComboOffersSection = () => {
    const [addedCombos, setAddedCombos] = useState({});

    const combos = [
        {
            id: 1,
            name: "Headphone Care Kit",
            description: "Protect and maintain your headphones",
            link: "https://www.ubuy.co.in/product/1HCMSHZGI-sony-xb950b1-extra-bass-bluetooth-headphones-with-app-control-black-with-6ave-headphone-cleaning-kit-and-usb-wall-adapter?srsltid=AfmBOoobeexWs28nFgm6UQaDmP_d2kRFCmecTKvT3XJdMCOMgo7a-Ap4",
            icons: [
                "https://images-cdn.ubuy.co.in/66eafbeabed32729367402da-sony-xb950b1-extra-bass-bluetooth.jpg"
            ]
        },
        {
            id: 2,
            name: "Creator Travel Kit",
            description: "Perfect for vlogging and travel moments",
            link: "https://share.google/60EDmBwmQXqOm7rK6",
            icons: ["https://images-cdn.ubuy.co.in/65c36d3bcd13845f5a522f31-canon-eos-m50-mark-ii-content-creator.jpg"]
        }
    ];

    const handleAdd = (combo) => {
        setAddedCombos(prev => ({ ...prev, [combo.id]: true }));
        
        // Open link if available, but give feedback first
        if (combo.link) {
            setTimeout(() => {
                window.open(combo.link, '_blank');
            }, 300);
        } else {
            console.log(`Added combo: ${combo.name}`);
        }
    };

    const handleSkip = (name) => {
        console.log(`Skipped combo: ${name}`);
    };

    return (
        <div style={{ margin: '2rem 0' }}>
            <h3 style={{ marginBottom: '0.25rem', color: '#333' }}>Complete Your Setup</h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#666' }}>
                Popular combos that pair well with your purchase
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {combos.map((combo) => {
                    const isAdded = addedCombos[combo.id];
                    return (
                        <div 
                            key={combo.id}
                            className="combo-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1rem',
                                backgroundColor: '#fff',
                                borderRadius: '12px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                border: '1px solid #f0f0f0',
                                opacity: isAdded ? 0.9 : 1,
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                {combo.icons.map((icon, idx) => (
                                    <img 
                                        key={idx}
                                        src={icon}
                                        alt="Product icon"
                                        style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }}
                                    />
                                ))}
                            </div>
                            
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                                    {combo.name}
                                </h4>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                                    {combo.description}
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button 
                                    onClick={() => handleAdd(combo)}
                                    disabled={isAdded}
                                    style={{
                                        flex: 1,
                                        padding: '0.6rem',
                                        backgroundColor: isAdded ? '#28a745' : '#f8f9fa',
                                        border: isAdded ? '1px solid #28a745' : '1px solid #ddd',
                                        borderRadius: '8px',
                                        color: isAdded ? '#fff' : '#333',
                                        fontWeight: '500',
                                        fontSize: '0.9rem',
                                        cursor: isAdded ? 'default' : 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {isAdded ? 'Added ✓' : 'Add Combo'}
                                </button>
                                <button 
                                    onClick={() => handleSkip(combo.name)}
                                    className="secondary"
                                    style={{
                                        flex: 1,
                                        padding: '0.6rem',
                                        backgroundColor: 'transparent',
                                        border: '1px solid transparent',
                                        color: '#888',
                                        fontWeight: '400',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style>
                {`
                    .combo-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 16px rgba(0,0,0,0.08) !important;
                    }
                    @media (min-width: 600px) {
                        div[style*="flex-direction: column"][style*="gap: 1rem"] > div {
                            flex-direction: row !important;
                            align-items: center;
                            justify-content: space-between;
                        }
                         div[style*="flex-direction: column"][style*="gap: 1rem"] > div > div:nth-child(2) {
                            flex: 1;
                            margin-bottom: 0 !important;
                            padding: 0 1rem;
                         }
                         div[style*="flex-direction: column"][style*="gap: 1rem"] > div > div:last-child {
                            flex: 0 0 auto;
                            width: 200px;
                         }
                    }
                `}
            </style>
        </div>
    );
};

export default ComboOffersSection;
