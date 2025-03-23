import React from 'react'
import { CodeComparison } from '@/components/ui/CodeSnippet'

export default function Educhain({ children }) {

    const smartcontract = `// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    contract CourseSub {
        address public owner;
        uint256 public coursePrice = 0.01 ether;
        uint256 public courseDuration = 7 days; // Duration granted upon purchase
    
        mapping(address => uint256) public accessExpiry;
    
        constructor() {
            owner = msg.sender;
        }
    
        // Pay to gain or extend access
        function buyAccess() external payable {
            require(msg.value >= coursePrice, "Insufficient payment");
    
            if (block.timestamp > accessExpiry[msg.sender]) {
                // Reset access time if expired
                accessExpiry[msg.sender] = block.timestamp + courseDuration;
            } else {
                // Extend existing access
                accessExpiry[msg.sender] += courseDuration;
            }
        }
    
        // Check if a user currently has valid access
        function hasAccess(address user) external view returns (bool) {
            return block.timestamp < accessExpiry[user];
        }
    
        // Immediately consume all of the caller’s access (for debugging)
        function consumeAllAccess() external {
            accessExpiry[msg.sender] = block.timestamp;
        }
    
        // Returns remaining hours of access (0 if expired)
        function getRemainingHours(address user) external view returns (uint256) {
            if (block.timestamp >= accessExpiry[user]) {
                return 0;
            } else {
                // Convert remaining seconds to hours
                return (accessExpiry[user] - block.timestamp) / 3600;
            }
        }
    
        // View the contract’s current balance (only owner can call)
        function getContractBalance() external view returns (uint256) {
            require(msg.sender == owner, "Not authorized");
            return address(this).balance;
        }
    
        // Withdraw all funds from the contract (only owner can call)
        function withdrawAll() external {
            require(msg.sender == owner, "Only owner can withdraw");
            require(address(this).balance > 0, "No funds to withdraw");
            payable(owner).transfer(address(this).balance);
        }
    }`

  return (
    <div className='w-screen h-full xl:grid xl:grid-cols-4 xl:grid-rows-2 gap-3 border-2 border-black'>
        <div className='col-span-3 w-full flex flex-col p-16 gap-8 sticky top-0 '>
            <h1 className='font-Onest font-bold text-4xl'>Desentrilazed Online Education Platform Project</h1>
            <div className='w-full h-full'>
                <div className='w-full aspect-[4/3] bg-gray-300 rounded-lg' >
                    <video width='100%' height='100%' controls className='rounded-2xl' muted>
                        <source src='/videos/0315.mp4' type='video/mp4'/>
                        your browser does not support the video tag
                    </video>
                </div>
            </div>
        </div>
        <div className='col-span-1 w-full flex flex-col py-3 xl:pt-24 pr-16'>
            {children}
        </div>
        <div>

        </div>
    </div>
  )
}

