import Arweave from 'arweave/web';

const hostname = window && window.location && window.location.hostname;

let arweave_config = {
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
};

const arweave = Arweave.init(arweave_config);

export default arweave;