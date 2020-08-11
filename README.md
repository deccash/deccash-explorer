***Note:*** This repository is currently unmaintained. If you want to take over the maintenance and support of this project, let us know!

# DecCash-Blockchain-Explorer
Block explorer for DecCash CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon deccashd. It should be accessible from the Internet. Run deccashd with open port as follows:
```bash
./deccashd --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf

Donate: [DXC] dECASH2RsoUdNCkhrtwBFE6QhfwPSg7fkNoauPFtXy8gDg3pUaPjfhg83VZ6s7nwRQPjWM9n8CqM2TFn4qpMSGgKhLCihukTg683j

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
