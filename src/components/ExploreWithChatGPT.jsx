import React from 'react';
// import askMeAnythingIcon from '../assets/ask_me_anything.png'; // Temporarily disabled due to file copy issue

function ExploreWithChatGPT() {
  const openChatGPT = () => {
    window.open("https://chat.openai.com/", "_blank");
  };

  const items = [
    { 
      icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png', // Placeholder for Ask Me Anything
      label: 'Ask Me Anything',
      isImage: true 
    },
    { 
      icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5S-24APfRVd7VI6fUSp06vL58-LGDcFbyVz6bVdfUk6tbCAsH', 
      label: 'Plan My Budget',
      isImage: true
    },
    { 
      icon: 'https://cdn-icons-png.flaticon.com/512/10446/10446694.png', // Placeholder for Image Creation
      label: 'Create Any Image',
      isImage: true
    },
    { 
      icon: 'https://cdn-icons-png.flaticon.com/512/2647/2647306.png', // Placeholder for Astrology
      label: 'Know Your Astrology',
      isImage: true
    },
  ];

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem', color: '#444' }}>EXPLORE WITH CHATGPT</h3>
      <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#666' }}>
        Get help, insights, and creative tools powered by AI
      </p>
      
      <div style={{ 
        backgroundColor: '#fff',
        border: '1px solid #eaeaea', 
        padding: '1.5rem', 
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {items.map((item, index) => (
            <div 
              key={index} 
              onClick={openChatGPT}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                cursor: 'pointer',
                textAlign: 'center',
                width: '160px' 
              }}
            >
              <div style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                backgroundColor: '#f5f5f5', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '0.8rem',
                transition: 'background-color 0.2s',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              >
                {item.isImage ? (
                  <img src={item.icon} alt={item.label} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                ) : (
                  <span style={{ fontSize: '3rem' }}>{item.icon}</span>
                )}
              </div>
              <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: '500', lineHeight: '1.4' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreWithChatGPT;
