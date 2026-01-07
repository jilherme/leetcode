function lengthOfLastWord(s: string): number {
    return s.trimEnd().split(" ").at(-1)!.length
};