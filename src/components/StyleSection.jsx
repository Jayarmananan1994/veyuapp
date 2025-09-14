function StyleSection() {
  const styles = [
    {
      title: "Casual Chic",
      description: "Explore comfortable and stylish outfits for everyday wear.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEduAoR0sFOurLSUmT_zfKuRZ9be7ajAeDrfmmyVBB-DO6Ild-XXyAT7iHBTgAyCo8WiibvFmqTq5Y38eZB3DnWkK0a6fOoCT9wwYDpzvkWEJcWb2v87On4APSjIQkch9VrKKqVvPEv7tJ201e0p_eTYoe948gEPZ-728PQTp8hkO6TwfrLzt8LUwA91897qOsMhVbfu2fCAUfv5Q1XyeJbjgCmdxQ4NqXBoV1HGzoLjEsiOtXbOJaAfmmBQsamMT94AyY43LGowzM"
    },
    {
      title: "Professional Polish",
      description: "Discover sophisticated looks for work and formal events.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6AuYGMhN-AasC39tFEaDYv1ZGXTzavn0Zm_ggtclKP7500vvqH69A5egAoyQ-nehw6tenlO_T7tgBgv9iz8ua7XiwLw2wlj410QUtWoWPjpS_8-JZuX2yib5Nclluyv0A7GoiiSl5vQNMjio6cKWrQXv94ndIxGOrsWA2dTm2q0w1mA4nJRQ14EUPcK3RmFxB8dDEowqvyLp0JS3m1qn9cuq_g7QwZC6CiLwxnyYTL6E2Z_XGLSc6Xvj6G7PahvxL6evivmA9upL"
    },
    {
      title: "Evening Glamour",
      description: "Find stunning dresses and outfits for your special nights out.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhoPKNjg3tHTKTU7oa_jKlAIVGaXKdPxNwTClenGfpELeChDkKQptTk3qygZ_LL71eQa3JrVLGEH9FvHnepn13cbYdcErbdCj0CTY8S9y18nf-A17E6u6OS8_bh25VF2ekvSCn7M_bQ2zbj4rsDkM5b0NXX_LSmiPEHFJpDHVmAUeMXp57AFGV53kVF2zvkgugbP8_59YP3BZEQU9VHN2q3gtlULF1Fi6MvRxoAsUidk4Hrr6LNUCTWSDl2hh6lbIumIJo2HGXsazW"
    }
  ];

  return (
    <section style={{
      padding: '64px 16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '768px',
          margin: '0 auto 48px auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            margin: '0 0 16px 0',
            color: '#111827'
          }}>
            Style is about daring to be different, not fitting in
          </h2>
          <p style={{
            marginTop: '16px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#6b7280'
          }}>
            Veyu helps you discover new styles and create looks that are uniquely you. Step out of your comfort zone and into a world of fashion possibilities.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginTop: '48px'
        }}>
          {styles.map((style, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <div style={{
                  width: '100%',
                  height: '240px',
                  backgroundImage: `url("${style.image}")`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  margin: '0 0 4px 0',
                  color: '#111827'
                }}>
                  {style.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  margin: '4px 0 0 0'
                }}>
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StyleSection;