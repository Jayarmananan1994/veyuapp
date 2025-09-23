function RecommendationDetails({ recommendations }) {
  if (!recommendations) {
    return null;
  }

  const sectionStyle = {
    marginBottom: '32px',
    padding: '24px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb'
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const itemStyle = {
    padding: '12px 16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    marginBottom: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    lineHeight: '1.5'
  };

  const formatOutfitItem = (item) => {
    return `${item.type}: ${item.style_details || ''} ${item.color || ''} ${item.name || ''}`.trim();
  };

  const formatJewelry = (jewelry) => {
    return `${jewelry.item}: ${jewelry.style || ''} ${jewelry.material || ''}`.trim();
  };

  const formatBag = (bag) => {
    return `${bag.type}: ${bag.styling_detail || ''} ${bag.color || ''} ${bag.material || ''}`.trim();
  };

  const formatShoes = (shoes) => {
    return `${shoes.type}: ${shoes.brand_style || ''} ${shoes.color || ''}`.trim();
  };

  return (
    <div style={{
      marginTop: '32px'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '24px'
      }}>
        Detailed Recommendations
      </h2>

      {/* Outfit Items */}
      {recommendations.outfit && (
        <div style={sectionStyle}>
          <h3 style={headingStyle}>
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>checkroom</span>
            Outfit Details
          </h3>
          {recommendations.outfit.description && (
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '16px',
              fontStyle: 'italic'
            }}>
              {recommendations.outfit.description}
            </p>
          )}
          {recommendations.outfit.items && recommendations.outfit.items.map((item, index) => (
            <div key={index} style={itemStyle}>
              {formatOutfitItem(item)}
            </div>
          ))}
        </div>
      )}

      {/* Accessories */}
      {recommendations.accessories && (
        <div style={sectionStyle}>
          <h3 style={headingStyle}>
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>diamond</span>
            Accessories
          </h3>

          {/* Jewelry */}
          {recommendations.accessories.jewelry && recommendations.accessories.jewelry.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Jewelry
              </h4>
              {recommendations.accessories.jewelry.map((jewelry, index) => (
                <div key={index} style={itemStyle}>
                  {formatJewelry(jewelry)}
                </div>
              ))}
            </div>
          )}

          {/* Bag */}
          {recommendations.accessories.bag && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Bag
              </h4>
              <div style={itemStyle}>
                {formatBag(recommendations.accessories.bag)}
              </div>
            </div>
          )}

          {/* Shoes */}
          {recommendations.accessories.shoe && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Shoes
              </h4>
              <div style={itemStyle}>
                {formatShoes(recommendations.accessories.shoe)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Makeup */}
      {recommendations.makeup && (
        <div style={sectionStyle}>
          <h3 style={headingStyle}>
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>palette</span>
            Makeup
          </h3>
          {recommendations.makeup.description && (
            <div style={itemStyle}>
              <strong>Description:</strong> {recommendations.makeup.description}
            </div>
          )}
          {recommendations.makeup.style && (
            <div style={itemStyle}>
              <strong>Style:</strong> {recommendations.makeup.style}
            </div>
          )}
          {recommendations.makeup.colors && (
            <div style={itemStyle}>
              <strong>Colors:</strong>
              {typeof recommendations.makeup.colors === 'object' ? (
                <div style={{ marginTop: '8px', paddingLeft: '16px' }}>
                  {recommendations.makeup.colors.cheeks && (
                    <div><strong>Cheeks:</strong> {recommendations.makeup.colors.cheeks}</div>
                  )}
                  {recommendations.makeup.colors.eye && (
                    <div><strong>Eyes:</strong> {recommendations.makeup.colors.eye}</div>
                  )}
                  {recommendations.makeup.colors.lips && (
                    <div><strong>Lips:</strong> {recommendations.makeup.colors.lips}</div>
                  )}
                </div>
              ) : (
                ` ${recommendations.makeup.colors}`
              )}
            </div>
          )}
          {recommendations.makeup.techniques && (
            <div style={itemStyle}>
              <strong>Techniques:</strong> {recommendations.makeup.techniques}
            </div>
          )}
        </div>
      )}

      {/* Hairstyle */}
      {recommendations.hairstyle && (
        <div style={sectionStyle}>
          <h3 style={headingStyle}>
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>face_retouching_natural</span>
            Hairstyle
          </h3>
          {recommendations.hairstyle.description && (
            <div style={itemStyle}>
              <strong>Description:</strong> {recommendations.hairstyle.description}
            </div>
          )}
          {recommendations.hairstyle.cut && (
            <div style={itemStyle}>
              <strong>Cut:</strong> {recommendations.hairstyle.cut}
            </div>
          )}
          {recommendations.hairstyle.styling && (
            <div style={itemStyle}>
              <strong>Styling:</strong> {recommendations.hairstyle.styling}
            </div>
          )}
          {recommendations.hairstyle.accessories && (
            <div style={itemStyle}>
              <strong>Accessories:</strong> {recommendations.hairstyle.accessories}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecommendationDetails;