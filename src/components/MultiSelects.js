import React, { useState } from 'react';
import Select from 'react-select'
 
const currencyData = [
  {
    label: 'EUR: Euro',
    value: 'EUR: Euro',
    shortName: 'EUR'
  },
  {
    label: 'GBP: British Pound Sterling',
    value: 'GBP: British Pound Sterling',
    country: 'Great Brittain',
    shortName: 'GBP'
  },
  {
    currency: 'USD: United States Dollar',
    country: 'United States'
  },
  {
    currency: 'JPY: Japanese Yen',
    country: 'Japan'
  },
  {
    currency: 'SEK: Swedish Krona',
    country: 'Sweden'
  },
  {
    currency: 'AED: United Arab Emirates Dirham',
    country: 'United Arab Emirates Dirham',
    shortName: 'AED'
  },
  {
    currency: 'AFN: Afghan Afghani',
    country: 'Afghan Afghani',
    shortName: 'AFN'
  },
  {
    currency: 'ALL: Albanian Lek',
    country: 'Albanian Lek',
    shortName: 'ALL'
  },
  {
    currency: 'AMD: Armenian Dram',
    country: 'Armenian Dram',
    shortName: 'AMD'
  },
  {
    currency: 'ANG: Netherlands Antillean Guilder',
    country: 'Curaçao and Sint Maarten',
    shortName: 'ANG'
  },
  {
    currency: 'AOA: Angolan Kwanza',
    country: 'Angola',
    shortName: 'AOA'
  },
  {
    currency: 'ARS: Argentine Peso',
    country: 'Argentina',
    shortName: 'ARS'
  },
  {
    currency: 'AUD: Australian Dollar',
    country: 'Australia',
    shortName: 'AUD'
  },
  {
    currency: 'AWG: Aruban Florin',
    country: 'Aruba',
    shortName: 'AWG'
  },
  {
    currency: 'AZN: Azerbaijani Manat',
    country: 'Azerbaijan ',
    shortName: 'AZN'
  },
  {
    currency: 'BAM: Bosnia-Herzegovina Convertible Mark',
    country: 'Bosnia and Herzegovina ',
    shortName: 'BAM'
  },
  {
    currency: 'BBD: Barbadian Dollar',
    country: 'Barbados',
    shortName: 'BBD'
  },
  {
    currency: 'BDT: Bangladeshi Taka',
    country: 'Bangladesh',
    shortName: 'BDT'
  },
  {
    currency: 'BGN: Bulgarian Lev',
    country: 'Bulgarian',
    shortName: 'BGN'
  },
  {
    currency: 'BHD: Bahraini Dinar',
    country: 'Bahrain',
    shortName: 'BHD'
  },
  {
    currency: 'BIF: Burundian Franc',
    country: 'Burundi',
    shortName: 'BIF'
  },
  {
    currency: 'BMD: Bermudan Dollar',
    country: 'Bermuda',
    shortName: 'BMD'
  },
  {
    currency: 'BND: Brunei Dollar',
    country: 'Brunei',
    shortName: 'BND'
  },
  {
    currency: 'BOB: Bolivian Boliviano',
    country: 'Bolivia',
    shortName: 'BOB'
  },
  {
    currency: 'BRL: Brazilian Real',
    country: 'Brazil',
    shortName: 'BRL'
  },
  {
    currency: 'BSD: Bahamian Dollar',
    country: 'Bahamas',
    shortName: 'BSD'
  },
  {
    currency: 'BTC: Bitcoin',
    shortName: 'BTC'
  },
  {
    currency: 'BTN: Bhutanese Ngultrum',
    country: 'Bhutan',
    shortName: 'BTN'
  },
  {
    currency: 'BWP: Botswanan Pula',
    country: 'Botswanan',
    shortName: 'BWP'
  },
  {
    currency: 'BYN: Belarusian Ruble',
    country: 'Belarus',
    shortName: 'BYN'
  },
  {
    currency: 'BZD: Belize Dollar',
    country: 'Belize',
    shortName: 'BZD'
  },
  {
    currency: 'CAD: Canadian Dollar',
    country: 'Canada',
    shortName: 'CAD'
  },
  {
    currency: 'CDF: Congolese Franc',
    country: 'Kongo',
    shortName: 'CDF'
  },
  {
    currency: 'CHF: Swiss Franc',
    country: 'Switzerland',
    shortName: 'CHF'
  },
  {
    currency: 'CLF: Chilean Unit of Account (UF)',
    shortName: 'CLF'
  },
  {
    currency: 'CLP: Chilean Peso',
    country: 'Chile',
    shortName: 'CLP'
  },
  {
    currency: 'CLP: Chinese Yuan (Offshore)',
    shortName: 'CLP'
  },
  {
    currency: 'CNY: Chinese Yuan',
    country: 'China',
    shortName: 'CNY'
  },
  {
    currency: 'COP: Colombian Peso',
    country: 'Colombia',
    shortName: 'COP'
  },
  {
    currency: 'CRC: Costa Rican Colón',
    country: 'Costa Rica',
    shortName: 'CRC'
  },
  {
    currency: 'CUP: Cuban Peso',
    country: 'Cuba',
    shortName: 'CUP'
  },
  {
    currency: 'CVE: Cape Verdean Escudo',
    country: 'Cape Verde',
    shortName: 'CVE'
  },
  {
    currency: 'CZK: Czech Republic Koruna',
    country: 'Czech Republic',
    shortName: 'CZK'
  },
  {
    country: 'Cyprus',
    shortName: 'EUR'
  },
  {
    currency: 'DJF: Djiboutian Franc',
    country: 'Djibouti',
    shortName: 'DJF'
  },
  {
    currency: 'DKK: Danish Krone',
    country: 'Denmark',
    shortName: 'DKK'
  },
  {
    currency: 'DOP: Dominican Peso',
    country: 'Dominican Republic',
    shortName: 'DOP'
  },
  {
    currency: 'DZD: Algerian Dinar',
    country: 'Algerian',
    shortName: 'DZD'
  },
  {
    currency: 'EGP: Egyptian Pound',
    country: 'Egypt',
    shortName: 'EGP'
  },
  {
    currency: 'ERN: Eritrean Nakfa',
    country: 'Eritrea',
    shortName: 'ERN'
  },
  {
    currency: 'ETB: Ethiopian Birr',
    country: 'Ethiopian',
    shortName: 'ETB'
  },
  {
    country: 'Estonia',
    shortName: 'EUR'
  },
  {
    currency: 'FJD Fijian Dollar',
    country: 'Fiji',
    shortName: 'FJD'
  },
  {
    currency: 'FJD Fijian Dollar',
    country: 'Fiji',
    shortName: 'FJD'
  },
  {
    currency: 'Falkland Islands Pound Pound',
    country: 'Falkland Islands',
    shortName: 'FKP'
  },
  {
    currency: 'GEL: Georgian Lari',
    country: 'Georgian Lari',
    shortName: 'GEL'
  },
  {
    currency: 'GHS: Ghanaian Cedi',
    country: 'Ghana',
    shortName: 'GHS'
  },
  {
    currency: 'GIP: Gibraltar Pound',
    country: 'Gibraltar',
  },
  {
    currency: 'GMD: Gambian Dalasi',
    country: 'Gambia',
  },
  {
    currency: 'GNF: Guinean Franc',
    country: 'Guinea',
  },
  {
    currency: 'GTQ: Guatemalan Quetzal',
    country: 'Guatemala',
  },
  {
    currency: 'GYD: Guyanaese Dollar',
    country: 'Guyana',
  },
  {
    currency: 'HNL: Honduran Lempira',
    country: 'Honduran Lempira',
  },
  {
    currency: 'HRK: Croatian Kuna',
    country: 'Croatia',
  },
  {
    currency: 'HTG: Haitian Gourde',
    country: 'Haiti',
  },
  {
    currency: 'HUF: Hungarian Forint',
    country: 'Hungary',
  },
  {
    currency: 'IDR: Indonesian Rupiah',
    country: 'Indonesia',
  },
  {
    currency: 'ILS: Israeli New Sheqel',
    country: 'Israel',
  },
  {
    currency: 'IMP: Manx pound',
    country: 'Isle of Man',
  },
  {
    currency: 'INR: Indian Rupee',
    country: 'India',
  },
  {
    currency: 'IQD: Iraqi Dinar',
    country: 'Iraq',
  },
  {
    currency: 'IRR: Iranian Rial',
    country: 'Iran',
  },
  {
    currency: 'ISK: Icelandic Króna',
    country: 'Iceland',
  },
  {
    currency: 'JEP: Jersey Pound',
    country: 'Jersey',
  },
  {
    currency: 'JMD: Jamaican Dollar',
    country: 'Jamaica',
  },
  {
    currency: 'JOD: Jordanian Dinar',
    country: 'Jordania',
  },
  {
    currency: 'KES: Kenyan Shilling',
    country: 'Kenya',
  },
  {
    currency: 'KGS: Kyrgystani Som',
    country: 'Kirgizistan',
  },
  {
    currency: 'KHR: Cambodian Riel',
    country: 'Cambodia',
  },
  {
    currency: 'KMF: Comorian Franc',
    country: 'Comoros',
  },
  {
    currency: 'KPW: North Korean Won',
    country: 'North Korea',
  },
  {
    currency: 'KRW: South Korean Won',
    country: 'South Korea',
  },
  {
    currency: 'KWD: Kuwaiti Dinar',
    country: 'Kuwait',
  },
  {
    currency: 'KYD: Cayman Islands Dollar',
    country: 'Cayman Islands',
  },
  {
    currency: 'KZT: Kazakhstani Tenge',
    country: 'Kazakstan',
  },
  {
    currency: 'LAK: Laotian Kip',
    country: 'Laos',
  },
  {
    currency: 'LBP: Lebanese Pound',
    country: 'Lebanon',
  },
  {
    currency: 'LKR: Sri Lankan Rupee',
    country: 'Sri Lanka',
  },
  {
    currency: 'LRD: Liberian Dollar',
    country: 'Liberia',
  },
  {
    currency: 'LSL: Lesotho Loti',
    country: 'Lesotho',
  },
  {
    currency: 'LYD: Libyan Dinar',
    country: 'Libya',
  },
  {
    currency: 'MAD: Moroccan Dirham',
    country: 'Morocco',
  },
  {
    currency: 'MDL: Moldovan Leu',
    country: 'Moldova',
  },
  {
    currency: 'MGA: Malagasy Ariary',
    country: 'Madagascar',
  },
  {
    currency: 'MKD: Macedonian Denar',
    country: 'North Macedonia',
  },
  {
    currency: 'MMK: Myanma Kyat',
    country: 'Myanmar (Burma)',
  },
  {
    currency: 'MNT: Mongolian Tugrik',
    country: 'Mongolia',
  },
  {
    currency: 'MOP: Macanese Pataca',
    country: 'Macau',
  },
  {
    currency: 'MRU: Mauritanian Ouguiya',
    country: 'Mauritania',
  },
  {
    currency: 'MUR: Mauritian Rupee',
    country: 'Mauritius',
  },
  {
    currency: 'MVR: Maldivian Rufiyaa',
    country: 'Maldives',
  },
  {
    currency: 'MWK: Malawian Kwacha',
    country: 'Malawi',
  },
  {
    currency: 'MXN: Mexican Peso',
    country: 'Mexico',
  },
  {
    currency: 'MYR: Malaysian Ringgit',
    country: 'Malaysia',
  },
  {
    currency: 'MZN: Mozambican Metical',
    country: 'Mozambique',
  },
  {
    currency: 'NAD: Namibian Dollar',
    country: 'Namibia',
  },
  {
    currency: 'NGN: Nigerian Naira',
    country: 'Nigeria',
  },
  {
    currency: 'NIO: Nicaraguan Córdoba',
    country: 'Nicaragua',
  },
  {
    currency: 'NOK: Norwegian Krone',
    country: 'Norway',
  },
  {
    currency: 'NPR: Nepalese Rupee',
    country: 'Nepal',
  },
  {
    currency: 'NZD: New Zealand Dollar',
    country: 'New Zealand',
  },
  {
    currency: 'OMR: Omani Rial',
    country: 'Oman',
  },
  {
    currency: 'PAB: Panamanian Balboa',
    country: 'Panama',
  },
  {
    currency: 'PEN: Peruvian Nuevo Sol',
    country: 'Peru',
  },
  {
    currency: 'PGK: Papua New Guinean Kina',
    country: 'Papua New Guinea',
  },
  {
    currency: 'PHP: Philippine Peso',
    country: 'Philippines',
  },
  {
    currency: 'PKR: Pakistani Rupee',
    country: 'Pakistan',
  },
  {
    currency: 'PLN: Polish Zloty',
    country: 'Poland',
  },
  {
    currency: 'PYG: Paraguayan Guarani',
    country: 'Paraguay',
  },
  {
    currency: 'QAR: Qatari Rial',
    country: 'Qatar',
  },
  {
    currency: 'RON: Romanian Leu',
    country: 'Romania',
  },
  {
    currency: 'RSD: Serbian Dinar',
    country: 'Serbia',
  },
  {
    currency: 'RUB: Russian Ruble',
    country: 'Russia',
  },
  {
    currency: 'RWF: Rwandan Franc',
    country: 'Rwanda',
  },
  {
    currency: 'SAR: Saudi Riyal',
    country: 'Saudi Arabia',
  },
  {
    currency: 'SBD: Solomon Islands Dollar',
    country: 'Solomon Islands',
  },
  {
    currency: 'SCR: Seychellois Rupee',
    country: 'Seychelles',
  },
  {
    currency: 'SDG: Sudanese Pound',
    country: 'Sudan',
  },
  {
    currency: 'SGD: Singapore Dollar',
    country: 'Singapore',
  },
  {
    currency: 'SHP: Saint Helena Pound',
    country: 'St. Helena and Ascension Island',
  },
  {
    currency: 'SLL: Sierra Leonean Leone',
    country: 'Sierra Leone',
  },
  {
    currency: 'SOS: Somali Shilling',
    country: 'Somalia',
  },
  {
    currency: 'SRD: Surinamese Dollar',
    country: 'Suriname',
  },
  {
    currency: 'SSP: South Sudanese Pound',
    country: 'Republic of South Sudan',
  },
  {
    currency: 'STN: São Tomé and Príncipe Dobra',
    country: 'São Tomé and Príncipe',
  },
  {
    currency: 'SVC: Salvadoran Colón',
    country: 'El Salvador',
  },
  {
    currency: 'SYP: Syrian Pound',
    country: 'Syria',
  },
  {
    currency: 'SZL: Swazi Lilangeni',
    country: 'Eswatini',
  },
  {
    currency: 'THB: Thai Baht',
    country: 'Thailand',
  },
  {
    currency: 'TJS: Tajikistani Somoni',
    country: 'Tajikistan',
  },
  {
    currency: 'TMT: Turkmenistani Manat',
    country: 'Turkmenistan',
  },
  {
    currency: 'TND: Tunisian Dinar',
    country: 'Tunisia',
  },
  {
    currency: "TOP: Tongan Pa'anga",
    country: 'Tonga',
  },
  {
    currency: 'TRY: Turkish Lira',
    country: 'Turkey',
  },
  {
    currency: 'TTD: Trinidad and Tobago Dollar',
    country: 'Trinidad and Tobago',
  },
  {
    currency: 'TWD: New Taiwan Dollar',
    country: 'New Taiwan',
  },
  {
    currency: 'TZS: Tanzanian Shilling',
    country: 'Tanzania',
  },
  {
    currency: 'UAH: Ukrainian Hryvnia',
    country: 'Ukraine',
  },
  {
    currency: 'UGX: Ugandan Shilling',
    country: 'Uganda',
  },
  {
    currency: 'UYU: Uruguayan Peso',
    country: 'Uruguay',
  },
  {
    currency: 'UZS: Uzbekistan Som',
    country: 'Uzbekistan',
  },
  {
    currency: 'VES: Venezuelan Bolívar Soberano',
    country: 'Venezuela',
  },
  {
    currency: 'VND: Vietnamese Dong',
    country: 'Vietnam',
  },
  {
    currency: 'VUV: Vanuatu Vatu',
    country: 'Vanuatu',
  },
  {
    currency: 'VUV: Vanuatu Vatu',
    country: 'Vanuatu',
  },
  {
    currency: 'WST: Samoan Tala',
    country: 'Independent State of Samoa',
  },
  {
    currency: 'XAF: CFA Franc BEAC',
    country: 'Central Africa',
  },
  {
    currency: 'XCD: East Caribbean Dollar',
    country: 'East Caribbean',
  },
  {
    currency: 'XOF: CFA Franc BCEAO',
    country: 'West Caribbean',
  },
  {
    currency: 'YER: Yemeni Rial',
    country: 'Yemen',
  },
  {
    currency: 'ZAR: South African Rand',
    country: 'South Africa',
  },
  {
    currency: 'ZAR: South African Rand',
    country: 'Zambia',
  },
  {
    currency: 'ZWL: Zimbabwean Dollar',
    country: 'Zimbabwe',
  },
  {
    currency: 'XAG: Silver Ounce',
  },
  {
    currency: 'XAU: Gold Ounce',
  },
  {
    currency: 'XDR: Special Drawing Rights',
  },
  {
    currency: 'XPD: Palladium Ounce',
  },
  {
    currency: 'XPT: Platinum Ounce',
  },
  {
    country: 'Austria',
    shortName: 'EUR'
  },
  {
    country: 'Belgium',
    shortName: 'EUR'
  },
  {
    country: 'Finland',
    shortName: 'EUR'
  },
  {
    country: 'France',
    shortName: 'EUR'
  },
  {
    country: 'Germany',
    shortName: 'EUR'
  },
  {
    country: 'Greece',
    shortName: 'EUR'
  },
  {
    country: 'Ireland',
    shortName: 'EUR'
  },
  {
    country: 'Italy',
    shortName: 'EUR'
  },
  {
    country: 'Latvia',
    shortName: 'EUR'
  },
  {
    country: 'Lithuania',
    shortName: 'EUR'
  },
  {
    country: 'Luxemburg',
    shortName: 'EUR'
  },
  {
    country: 'Malta',
    shortName: 'EUR'
  },
  {
    country: 'Netherlands',
    shortName: 'EUR'
  },
  {
    country: 'Portugal',
    shortName: 'EUR'
  },
  {
    country: 'Slovakia',
    shortName: 'EUR'
  },
  {
    country: 'Slovenia',
    shortName: 'EUR'
  },
  {
    country: 'Spain',
    shortName: 'EUR'
  },

]

const MultiSelects = () => {
  const data = [
    {
      label: 'EUR: Euro',
      value: 'EUR'
    },
    {
      label: 'GBP: British Pound Sterling',
      value: 'GBP'
    },
    {
      label: 'USD: United States Dollar',
      value: 'United States',
    },
    {
      currency: 'JPY: Japanese Yen',
      country: 'Japan',
    },
    {
      currency: 'SEK: Swedish Krona',
      country: 'Sweden',
    },
    {
      currency: 'AED: United Arab Emirates Dirham',
      country: 'United Arab Emirates Dirham',
      shortName: 'AED'
    },
    {
      currency: 'AFN: Afghan Afghani',
      country: 'Afghan Afghani',
      shortName: 'AFN'
    },
    {
      currency: 'ALL: Albanian Lek',
      country: 'Albanian Lek',
      shortName: 'ALL'
    },
  ]


  
 
  const [selected, setSelected] = useState([]);
 
  return (
    <div>
      <h1>Select Fruits</h1>
      {/* {selected.map(item => (
        <p>{item}</p>
      ))} */}
      
      <Select isMulti options={currencyData} ></Select>
      
      {/* <MultiSelect
        options={data}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      /> */}
    </div>
  );
};
 
export default MultiSelects;