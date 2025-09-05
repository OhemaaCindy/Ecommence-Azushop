interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Evershop",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 ">
      <div className="bg-white border-t border-gray-200 ml-10 mr-10">
        <div className=" px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {/* Visa */}

                <img src="/visa.png" alt="visa card" />
                {/* PayPal */}
                <img src="/paypal.png" alt="paypal" />

                {/* Mastercard */}
                <img src="/Mastercard.png" alt="Mastercard" />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600">
              {year} {companyName}. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
