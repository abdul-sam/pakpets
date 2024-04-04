import React from "react";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/styles";

import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";

import { QuickLinks, PetByAge, PetByCategory, PetByColor, PetByLocation } from "../../constants/footer";

const Footer = () => {

  return(
    <>
      <section className={`pt-10 pb-10 sm:pb-20 bg-${theme.color}-800 text-white`}>
        <div className={styles.container}>
          <div className="justify-center flex-1 px-0 mx-auto">
            <section className={`my-20 ${styles.footer.wrapper}`}>
              <div className="w-full px-5">
                <FooterHeading
                  heading="Quick Links"
                />
                {
                  QuickLinks && 
                  QuickLinks.map(
                    link => 
                    <FooterLink 
                      key={link.id}
                      title={link.title}
                      link={link.link} 
                    />
                  )
                }
              </div>
              <div className="w-full px-5 text-sm items-center justify-center">
                <FooterHeading
                  heading="Pets By Age"
                />
                {
                  PetByAge && 
                  PetByAge.map(
                    link => 
                    <FooterLink 
                      key={link.id}
                      title={link.title}
                      link={link.link} 
                    />
                  )
                }
              </div>
              <div className="w-full px-5 text-sm items-center justify-center">
                <FooterHeading
                  heading="Pets By Category"
                />
                {
                  PetByCategory && 
                  PetByCategory.map(
                    link => 
                    <FooterLink 
                      key={link.id}
                      title={link.title}
                      link={link.link} 
                    />
                  )
                }
              </div>

              <div className="w-full px-5 text-sm items-center justify-center">
                <FooterHeading
                  heading="Pets By Color"
                />
                {
                  PetByColor && 
                  PetByColor.map(
                    link => 
                    <FooterLink 
                      key={link.id}
                      title={link.title}
                      link={link.link} 
                    />
                  )
                }
              </div>

              <div className="w-full px-5 text-sm items-center justify-center">
                <FooterHeading
                  heading="Pets By Location"
                />
                {
                  PetByLocation && 
                  PetByLocation.map(
                    link => 
                    <FooterLink 
                      key={link.id}
                      title={link.title}
                      link={link.link} 
                    />
                  )
                }
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )

}

export default Footer;