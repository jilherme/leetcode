function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map<string, string[]>()
    for (const str of strs) {
        const sortedString = str.split("").sort().join() 
        if (!anagrams.has(sortedString)) {
            anagrams.set(sortedString, [])
        }
        anagrams.get(sortedString)!.push(str)
    }
    
    return Array.from(anagrams.values())
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])