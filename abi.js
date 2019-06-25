const   contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "paramPauta",
				"type": "string"
			},
			{
				"name": "paramDecisao",
				"type": "string"
			},
			{
				"name": "paramData",
				"type": "string"
			},
			{
				"name": "paramParticipantes",
				"type": "string"
			},
			{
				"name": "paramCapitalSocial",
				"type": "string"
			},
			{
				"name": "paramObservacoes",
				"type": "string"
			},
			{
				"name": "paramNumeroAta",
				"type": "string"
			}
		],
		"name": "ArquivarAta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			}
		],
		"name": "time",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "book1",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			},
			{
				"name": "participantes",
				"type": "string"
			},
			{
				"name": "capitalSocial",
				"type": "string"
			},
			{
				"name": "observacoes",
				"type": "string"
			},
			{
				"name": "numeroAta",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "book2",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			},
			{
				"name": "participantes",
				"type": "string"
			},
			{
				"name": "capitalSocial",
				"type": "string"
			},
			{
				"name": "observacoes",
				"type": "string"
			},
			{
				"name": "numeroAta",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_data",
				"type": "string"
			}
		],
		"name": "buscaPorData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroAta",
				"type": "uint256"
			}
		],
		"name": "ConsultaDeliberacoesConselho",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "mostrarNumeroAtas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
    
    if (network === "4") {
        contractAddress = "0xed6da926e0bbff06d86c3bc96b8b692004e8ee2d"; 
    
    } else {
    contractAddress = "0xed6da926e0bbff06d86c3bc96b8b692004e8ee2d"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
